<template>
  <div className="menu">
    <RouterLink to="/" className="logo">
      <img src="../assets/logo.svg" alt="" />
    </RouterLink>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">List</RouterLink>
        </li>
        <li>
          <RouterLink to="/article">Article</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
$color-primary: #14cc76;

.menu {
  width: 300px;
  display: block;
  padding: 0 35px;
  ul {
    list-style: none;
    li {
      &:hover {
        a {
          color: $color-primary;
          font-weight: 700;
        }
      }
    }
    a {
      display: block;
      text-decoration: none;
      line-height: 120%;
      color: #333;
      position: relative;
      text-align: right;
      overflow: hidden;
      font-size: 24px;
      padding: 15px 35px;
      text-transform: uppercase;
    }
  }
}
.logo {
  display: block;
  text-align: center;
  color: #333;
  text-decoration: none;
  font-style: italic;
  width: 100%;
  margin: 0 auto 20px;
  img {
    transition: transform 0.25s, -webkit-transform 0.25s;
    margin: 0 0 5px;
    width: 100%;
    &:hover {
      transform: scale3d(1.1, 1.1, 1);
    }
  }
}
</style>
