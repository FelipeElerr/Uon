import { getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { useState, useEffect, useContext } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import logoImg from "../../assets/uOn_logo.jpeg";
import { auth } from "../../services/firebaseConfig";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import  { AuthContext } from '../../contexts/auth'
import db from "../../firebase";
import {addDoc, setDoc, collection, doc, updateDoc, query, where, getDocs} from "@firebase/firestore";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const context = useContext(AuthContext)
  const {professorId, setProfessorId} = context


  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const RecuperaCodigo = async() =>{
    const ProfRef = collection(db, "Professor");
    const q = query(ProfRef, where("email", "==", email));

    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      //console.log(professorId);
      //console.log(doc.id, " => ", doc.data());
      setProfessorId(doc.id)
      

});

  }

  function handleSignIn(e) {
    e.preventDefault();
    RecuperaCodigo()
    signInWithEmailAndPassword( email, password)
  }

  useEffect(() => {
    if (loading) {

      return;
    }
    if (user) navigate("/listar-disciplinas");
  }, [user, loading]);
  return (
    <div className="container">
      <header className="header">
        <img src={logoImg} alt="Workflow" className="logoImg" />
        <span>uOn - Tela de Login</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="professor@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="button" onClick={handleSignIn}>
          Entrar
        </button>
        <br />
        <div>
          <Link id="Link-botao" className="Link-botao" to="/register">Cadastro de usuário</Link>
        </div>
      </form>
    </div>
  );
}
