import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logoImg from "../../assets/uOn_logo.jpeg";
import { auth } from "../../services/firebaseConfig";
import "./styles.css";
import {setDoc, doc} from "@firebase/firestore" 
import db from "../../services/firebaseConfig"
import getLastDocument from "../../services/getLastDocument";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const gravaBanco = async () => {
    let ultimo = await getLastDocument('Professor')
    console.log(name, email, ultimo)
    try {
      setDoc(doc(db, 'Professor', String(parseInt(ultimo)+1)),{
        nome: name,
        email: email
      });
    } catch (error) {
      console.log(error)
    }
  }

  function handleSignOut(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
    gravaBanco();
  }

  if (loading) {
    return <p>carregando...</p>;
  }
  return (
    <div className="container">
      <header className="header">
        <img src={logoImg} alt="Workflow" className="logoImg" />
        <span>uOn - Tela de cadastro</span>
      </header>

      <form>

      <div className="inputContainer">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Renato"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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

        <button onClick={handleSignOut} className="button">
          Cadastrar
        </button>
        <br />
        <div className="footer">
          <Link id="Link-botao" className="Link-botao" to="/">Voltar para tela de login</Link>
        </div>
      </form>
    </div>
  );
}
