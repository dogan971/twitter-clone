import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import axios from "@/node_modules/axios/index";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (loading) return;
    registerModal.onClose();
    loginModal.onOpen();
  }, [loading, registerModal, loginModal]);
  const onSubmit = useCallback(async () => {
    try {
      setLoading(true);
      await axios.post("/api/register", {
        name,
        username,
        email,
        password,
      });
      toast.success("Registered successfully");
      signIn("credentials", {
        email,
        password,
      });

      registerModal.onClose();
    } catch (error) {
      console.log(error);
      toast.error("Failed to register");
    } finally {
      setLoading(false);
    }
  }, [registerModal, name, username, email, password]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={loading}
      />
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={loading}
      />
      <Input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={loading}
      />

      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={loading}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>Already have an account ?</p>
      <span
        className="
      text-white
      cursor-pointer
      hover:underline"
        onClick={onToggle}
      >
        Sign in
      </span>
    </div>
  );

  return (
    <Modal
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      actionLabel="Register"
      title="Create your account"
      disabled={loading}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
