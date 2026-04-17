
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db, storage, handleFirestoreError, OperationType } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  serverTimestamp, 
  doc, 
  getDoc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import ReactQuill from 'react-quill-new';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  LayoutDashboard, 
  FileText, 
  Settings, 
  LogOut, 
  Search, 
  Edit2, 
  Trash2, 
  Eye,
  X,
  Save,
  Image as ImageIcon,
  Upload
} from 'lucide-react';

const CATEGORIES = [
  '반려견 백과', '생활정보/팁', '건강관리/위생', '행동교정/심리', 
  '건강관리/상식', '견종정보/상식', '영양/사료', '행동/교육', 
  '입양/준비', '영양/안전', '심리/위로', '응급처치/질병', '응급처치/안전'
];

const COLORS = [
  'bg-orange-50', 'bg-blue-50', 'bg-yellow-50', 'bg-green-50', 
  'bg-indigo-50', 'bg-pink-50', 'bg-red-50', 'bg-amber-50', 
  'bg-teal-50', 'bg-rose-50', 'bg-sky-50', 'bg-cyan-50', 
  'bg-emerald-50', 'bg-purple-50', 'bg-stone-50', 'bg-violet-50', 
  'bg-slate-50', 'bg-lime-50'
];

const AdminDashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<any[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Form State
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [icon, setIcon] = useState('🐕');
  const [color, setColor] = useState(COLORS[0]);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [uploadingThumbnail, setUploadingThumbnail] = useState(false);

  const navigate = useNavigate();
  const quillRef = useRef<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate('/admin/login');
        return;
      }
      
      const adminEmail = "diple0212@gmail.com";
      const userRef = doc(db, 'users', user.uid);
      try {
        const userSnap = await getDoc(userRef);
        const role = user.email === adminEmail ? 'admin' : (userSnap.exists() ? userSnap.data().role : 'user');
        
        if (role !== 'admin') {
          navigate('/admin/login');
          return;
        }

        setUser(user);
        fetchPosts();
        setLoading(false);
      } catch (error) {
        console.error("Auth check error:", error);
        navigate('/admin/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const fetchPosts = async () => {
    const path = 'posts';
    try {
      const q = query(collection(db, path), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const fetchedPosts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(fetchedPosts);
    } catch (error) {
      handleFirestoreError(error, OperationType.LIST, path);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/');
  };

  const resetForm = () => {
    setTitle('');
    setExcerpt('');
    setContent('');
    setCategory(CATEGORIES[0]);
    setIcon('🐕');
    setColor(COLORS[0]);
    setThumbnailUrl('');
    setEditingPost(null);
    setIsFormOpen(false);
  };

  const handleThumbnailUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingThumbnail(true);
    try {
      const filename = `thumbnails/${Date.now()}_${file.name}`;
      const imageRef = storageRef(storage, filename);
      const snapshot = await uploadBytes(imageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      setThumbnailUrl(url);
    } catch (error) {
      console.error("Thumbnail upload error:", error);
      alert("이미지 업로드 중 오류가 발생했습니다.");
    } finally {
      setUploadingThumbnail(false);
    }
  };

  const imageHandler = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      const editor = quillRef.current.getEditor();
      const range = editor.getSelection();
      
      try {
        const filename = `blog_images/${Date.now()}_${file.name}`;
        const imageRef = storageRef(storage, filename);
        const snapshot = await uploadBytes(imageRef, file);
        const url = await getDownloadURL(snapshot.ref);
        
        // Insert image into editor
        editor.insertEmbed(range.index, 'image', url);
        editor.setSelection(range.index + 1);
      } catch (error) {
        console.error("Quill image upload error:", error);
        alert("이미지 업로드 중 오류가 발생했습니다.");
      }
    };
  }, []);

  const quillModules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['link', 'image'],
        ['clean']
      ],
      handlers: {
        image: imageHandler
      }
    }
  }), [imageHandler]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !user) return;

    setSubmitting(true);
    const path = 'posts';
    const date = new Date().toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/ /g, '').replace(/\.$/, '');

    const postData = {
      title,
      excerpt,
      content,
      category,
      icon,
      color,
      thumbnailUrl,
      date, // YYYY.MM.DD
      authorId: user.uid,
      updatedAt: serverTimestamp(),
    };

    try {
      if (editingPost) {
        await updateDoc(doc(db, path, editingPost.id), postData);
      } else {
        await addDoc(collection(db, path), {
          ...postData,
          createdAt: serverTimestamp(),
        });
      }
      resetForm();
      fetchPosts();
    } catch (error) {
      handleFirestoreError(error, editingPost ? OperationType.UPDATE : OperationType.CREATE, path);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (post: any) => {
    setEditingPost(post);
    setTitle(post.title);
    setExcerpt(post.excerpt || '');
    setContent(post.content);
    setCategory(post.category);
    setIcon(post.icon || '🐕');
    setColor(post.color || COLORS[0]);
    setThumbnailUrl(post.thumbnailUrl || '');
    setIsFormOpen(true);
  };

  const handleDelete = async (postId: string) => {
    if (!window.confirm('정말 이 포스트를 삭제하시겠습니까?')) return;
    
    const path = 'posts';
    try {
      await deleteDoc(doc(db, path, postId));
      fetchPosts();
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
            <LayoutDashboard className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-black text-gray-800">관리자 대시보드</h1>
            <p className="text-sm text-gray-400 font-medium">{user?.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsFormOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
          >
            <Plus className="w-5 h-5" />
            새 포스트 작성
          </button>
          <button 
            onClick={handleSignOut}
            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
            title="로그아웃"
          >
            <LogOut className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Stats & Search */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-center">
          <span className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">총 포스트</span>
          <span className="text-3xl font-black text-gray-800">{posts.length}개</span>
        </div>
        <div className="md:col-span-3 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
          <Search className="w-6 h-6 text-gray-400 ml-2" />
          <input 
            type="text" 
            placeholder="포스트 제목 또는 카테고리 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent outline-none font-medium text-gray-700"
          />
        </div>
      </div>

      {/* Post List */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-sm font-bold text-gray-400 uppercase tracking-wider">포스트</th>
                <th className="px-6 py-4 text-sm font-bold text-gray-400 uppercase tracking-wider">카테고리</th>
                <th className="px-6 py-4 text-sm font-bold text-gray-400 uppercase tracking-wider">날짜</th>
                <th className="px-6 py-4 text-sm font-bold text-gray-400 uppercase tracking-wider text-right">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${post.color || 'bg-gray-100'} rounded-lg flex items-center justify-center text-xl overflow-hidden`}>
                        {post.thumbnailUrl ? (
                          <img src={post.thumbnailUrl} alt="" className="w-full h-full object-cover" />
                        ) : (
                          post.icon || '🐕'
                        )}
                      </div>
                      <span className="font-bold text-gray-800 line-clamp-1">{post.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold text-orange-500 px-2.5 py-1 bg-orange-50 rounded-full">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400 font-medium">
                    {post.date}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                       <Link 
                        to={`/posts/${post.id}`}
                        target="_blank"
                        className="p-2 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all"
                      >
                        <Eye className="w-5 h-5" />
                      </Link>
                      <button 
                        onClick={() => handleEdit(post)}
                        className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => handleDelete(post.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredPosts.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-400 font-medium">
                    등록된 포스트가 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Post Editor Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-black text-gray-800">
                    {editingPost ? '포스트 수정' : '새 포스트 작성'}
                  </h2>
                </div>
                <button 
                  onClick={resetForm}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-8 space-y-6">
                {/* Image Upload / Thumbnail Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider px-1">대표 이미지 (Thumbnail)</label>
                    <div className="relative aspect-video bg-gray-50 border-2 border-dashed border-gray-100 rounded-2xl overflow-hidden group">
                      {thumbnailUrl ? (
                        <>
                          <img src={thumbnailUrl} alt="Thumbnail" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                          <button 
                            onClick={() => setThumbnailUrl('')}
                            className="absolute top-2 right-2 p-1.5 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </>
                      ) : (
                        <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-all gap-2">
                          <div className={`p-3 rounded-xl bg-white shadow-sm text-gray-400 group-hover:text-orange-500 transition-colors`}>
                            {uploadingThumbnail ? (
                              <div className="w-6 h-6 border-2 border-orange-200 border-t-orange-500 rounded-full animate-spin" />
                            ) : (
                              <Upload className="w-6 h-6" />
                            )}
                          </div>
                          <span className="text-xs font-bold text-gray-400">이미지 업로드</span>
                          <input type="file" className="hidden" accept="image/*" onChange={handleThumbnailUpload} disabled={uploadingThumbnail} />
                        </label>
                      )}
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 uppercase tracking-wider px-1">제목</label>
                      <input 
                        type="text" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="포스트 제목을 입력하세요"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-gray-800"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400 uppercase tracking-wider px-1">카테고리</label>
                        <select 
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-gray-800 appearance-none"
                        >
                          {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400 uppercase tracking-wider px-1">아이콘(Emoji)</label>
                        <input 
                          type="text" 
                          value={icon}
                          onChange={(e) => setIcon(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-gray-800 text-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider px-1">색상 테마</label>
                    <div className="flex flex-wrap gap-2 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                      {COLORS.map(c => (
                        <button
                          key={c}
                          onClick={() => setColor(c)}
                          className={`w-8 h-8 rounded-lg ${c} border-2 ${color === c ? 'border-orange-500 scale-110' : 'border-transparent'} transition-all`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider px-1">요약(Excerpt)</label>
                    <textarea 
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      placeholder="포스트 목록에 표시될 짧은 요약을 입력하세요"
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-orange-500 focus:bg-white transition-all font-medium text-gray-700 resize-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-wider px-1">본문 내용(Rich Text)</label>
                  <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
                    <ReactQuill 
                      ref={quillRef}
                      theme="snow" 
                      value={content} 
                      onChange={setContent}
                      className="h-[400px] mb-12"
                      modules={quillModules}
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50 flex items-center justify-end gap-3 sticky bottom-0 z-10">
                <button 
                  onClick={resetForm}
                  className="px-6 py-3 bg-white border border-gray-200 text-gray-600 rounded-2xl font-bold hover:bg-gray-100 transition-all"
                >
                  취소
                </button>
                <button 
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="px-8 py-3 bg-orange-500 text-white rounded-2xl font-black shadow-lg shadow-orange-500/20 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                >
                  {submitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Save className="w-5 h-5" />
                  )}
                  {editingPost ? '수정사항 저장' : '포스트 발행'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
