<template>
  <header class="header">
    <nav>
      <ul class="navList">
        <li>
          <router-link to="/">Главная</router-link>
        </li>
        <li>
          <router-link to="/add">Добавить</router-link>
        </li>
        <li>
          <router-link to="/about">О проекте</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.header {
  width: 100%;
  margin-bottom: 50px;
  box-shadow: 0 -6px 10px 5px rgba(0,0,0,0.5);

  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
}

.navList {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 20px;

  li {
    padding: 10px;
    
    &:hover {
      transform: scale(1.05);
      transition: all 0.25s;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: none;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
}

</style>
