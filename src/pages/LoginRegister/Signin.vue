<template>
  <div class="login-container">
    <h1>Welcome</h1>

    <form @submit.prevent="handleLogin">
      <div class="input-group">
        <label for="email">Email</label>
        <input
          v-model="loginObj.email"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>

      <div class="input-group">
        <label for="password">Password</label>
        <input
          v-model="loginObj.password"
          type="password"
          id="password"
          name="password"
          required
        />
      </div>

      <button type="submit">Login</button>
    </form>

    <a href="#">Forgot Password?</a>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import api from "../../api";
import { useAuthStore } from "../../store/AuthStore";

const auth = useAuthStore();
const router = useRouter();

const loginObj = reactive({
  email: "",
  password: "",
});

const handleLogin = () => {
  api
    .post("/login", loginObj)
    .then((result) => {
      console.log(result.data);
      auth.login(result.data); // Assuming this sets tokens/user info
      router.push("/dashboard");
    })
    .catch((err) => {
      console.error(err.message);
    });
};
</script>

<style>
body {
  font-family: "Poppins", sans-serif;
  background-image: url("https://images.unsplash.com/photo-1504674900247-0877df9cc836");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

/* Overlay for readability */
body::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

/* Glass Morphism Login Container */
.login-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
  position: relative;
  z-index: 1;
}

/* Logo */
.logo {
  width: 100px;
  margin-bottom: 1.5rem;
}

/* Heading */
h1 {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Input Group */
.input-group {
  position: relative;
  margin-bottom: 1.5rem;
  text-align: left;
}

.input-group label {
  display: block;
  color: white;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  outline: none;
  transition: border 0.3s ease;
}

.input-group input:hover,
.input-group input:focus {
  border-color: #f87f5e;
}

/* Login Button */
button {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #f87f5e, #f53804);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 0, 0, 0.3);
}

/* Forgot Password Link */
a {
  color: #ff6b6b;
  text-decoration: none;
  font-size: 0.9rem;
  display: inline-block;
  margin-top: 1rem;
}

a:hover {
  color: #f87f5e;
  text-decoration: underline;
}
</style>
