// js/firebase.js

// استدعاء دوال الفايربيس الأساسية
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ⚠⚠⚠ هام جداً: استبدل البيانات دي ببيانات مشروعك من موقع فايربيس
const firebaseConfig = {
    apiKey: "AIzaSyBVhQWQCYYMpkrVwg1xbDCkdUgua-IG4-8",
    authDomain: "fashionshop-972cc.firebaseapp.com",
    projectId: "fashionshop-972cc",
    storageBucket: "fashionshop-972cc.firebasestorage.app",
    messagingSenderId: "822936068800",
    appId: "1:822936068800:web:1f813b8464ba8d49fb8325",
    measurementId: "G-W59HRZRQ86"
  };

// تشغيل الفايربيس
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// تصدير الأدوات عشان نستخدمها في باقي الملفات
export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, collection, addDoc, getDocs };