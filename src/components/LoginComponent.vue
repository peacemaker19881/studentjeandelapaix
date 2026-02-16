<template>
    <div class ="form">
        <form class="Submit">
            Username:<input type="text" name="username" placeholder="
            Please fill username"/><br><br>
            Password:<input  type="password" name="Password" placeholder="Enter correct Password"/><br>
            <input type="submit" name="submit"/>
        </form>
    </div>
    </template>
<style>
.title {
    text-align: center;
    margin-bottom: 25px;
    color: #333;
}

/* Form groups */
.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  color: #555;
}

/* Inputs */
.form-group input {
  width: 100%;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
}

.form-group input:focus {
  border-color: #4f46e5;
}

/* Button */
.login-btn {
  width: 100%;
  padding: 12px;
  background: #4f46e5;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.login-btn:hover {
  background: #4338ca;
}
</style>