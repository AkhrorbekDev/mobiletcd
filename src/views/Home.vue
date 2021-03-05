<template>
  <div class="home">
    <headerCom/>
    <menuCom />
  </div>
</template>

<script>
import headerCom from '../components/header';
import menuCom from '../components/menu';
// @ is an alias to /src
export default {
  name: 'Home',
  components: { headerCom, menuCom },
};
</script>
