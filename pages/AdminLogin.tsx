
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { motion } from 'motion/react';
import { LogIn, ShieldAlert } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Check if admin
        const adminEmail = "diple0212@gmail.com";
        const isAdminEmail = user.email === adminEmail;
        
        try {
          const userRef = doc(db, 'users', user.uid);
          const userSnap = await getDoc(userRef);
          
          let role = 'user';
          if (isAdminEmail) {
            role = 'admin';
          } else if (userSnap.exists()) {
            role = userSnap.data().role;
          }

          if (role === 'admin') {
            // Update user record if needed
            if (!userSnap.exists() && isAdminEmail) {
              await setDoc(userRef, {
                email: user.email,
                role: 'admin',
                displayName: user.displayName || 'Admin'
              });
            }
            navigate('/admin');
          } else {
            setError('관리자 권한이 없습니다.');
            await auth.signOut();
          }
        } catch (err) {
          console.error(err);
          setError('인증 중 오류가 발생했습니다.');
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async () => {
    setError(null);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
      setError('로그인에 실패했습니다.');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 text-center space-y-6"
      >
        <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <LogIn className="w-10 h-10 text-orange-500" />
        </div>
        
        <h1 className="text-2xl font-black text-gray-800">관리자 로그인</h1>
        <p className="text-gray-500">블로그 관리를 위해 로그인해 주세요.</p>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm font-medium">
            <ShieldAlert className="w-5 h-5 flex-shrink-0" />
            {error}
          </div>
        )}

        <button
          onClick={handleLogin}
          className="w-full py-4 bg-orange-500 text-white rounded-2xl font-black text-lg shadow-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-3"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6 bg-white rounded-full p-1" />
          Google로 로그인
        </button>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
