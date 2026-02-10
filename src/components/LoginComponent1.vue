<template>
    <div class="form">
        <form class="Login">
            <p>User Login</p>
            <label for="email">Email</label><br>
            <input type="text" id="email" name="email" placeholder="Enter your email"/><br><br>
             <label for="password">Password</label><br>
            <input type="password" id="password" name="password" placeholder="Enter your password"/><br><br>
            <input type="submit" value="Login">
        </form>

    </div>
</template>

<style>
.form{
    border-radius:10px;
    background-color:#ccc;
    justify-content:center;
    border:1px solid black;
    margin-left:20%;
}

</style>