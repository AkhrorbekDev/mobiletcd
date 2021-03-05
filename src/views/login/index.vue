<template>
  <div class="home login" id="login">
    <div class="haeder-content">
      <el-row :gutter="10" class="header-flex">
        <el-col :span="5"></el-col>
        <el-col :span="14">
          <div class="logo-info-text">
            <img src="logo.png" alt="" />
          </div>
        </el-col>
        <el-col :span="5"></el-col>
      </el-row>
    </div>
    <section class="login">
      <div class="login-block">
        <div :class="{ 'login-correct': correct, 'login-wrong': wrong }">
          <div class="login-block__dots aliomas">
            <div class="login-block__dot">
              <div
                class="login-block__circle"
                :class="{ 'login-block__circle__active': password.length >= 1 }"
              ></div>
            </div>
            <div class="login-block__dot">
              <div
                class="login-block__circle"
                :class="{ 'login-block__circle__active': password.length >= 2 }"
              ></div>
            </div>
            <div class="login-block__dot">
              <div
                class="login-block__circle"
                :class="{ 'login-block__circle__active': password.length >= 3 }"
              ></div>
            </div>
            <div class="login-block__dot">
              <div
                class="login-block__circle"
                :class="{ 'login-block__circle__active': password.length >= 4 }"
              ></div>
            </div>
            <div class="login-block__dot">
              <div
                class="login-block__circle"
                :class="{ 'login-block__circle__active': password.length >= 5 }"
              ></div>
            </div>
            <div class="login-block__dot">
              <div
                class="login-block__circle"
                :class="{ 'login-block__circle__active': password.length >= 6 }"
              ></div>
            </div>
          </div>
          <p class="login__text">Введите пароль</p>
          <div class="login-block__numbers">
            <div class="login-block__number" @click="enter('1')">1</div>
            <div class="login-block__number" @click="enter('2')">2</div>
            <div class="login-block__number" @click="enter('3')">3</div>
            <div class="login-block__number" @click="enter('4')">4</div>
            <div class="login-block__number" @click="enter('5')">5</div>
            <div class="login-block__number" @click="enter('6')">6</div>
            <div class="login-block__number" @click="enter('7')">7</div>
            <div class="login-block__number" @click="enter('8')">8</div>
            <div class="login-block__number" @click="enter('9')">9</div>
            <div class="login-block__number" @click="dialogVisible = true">
              <i class="el-icon-setting"></i>
            </div>
            <div class="login-block__number" @click="enter('0')">0</div>
            <div class="login-block__number" @click="back()">
              <i class="el-icon-back"></i>
            </div>
          </div>
          <el-dialog title="Изменить адрес сервера" :visible.sync="dialogVisible" class="limer">
            <el-form label-position="top">
              <el-form-item
                label="Введите адрес сервера"
                :rules="[{ required: true, message: 'адрес сервера is required' }]"
              >
                <el-input placeholder="Введите адрес сервера">
                  <template slot="prepend">Http://</template>
                </el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">Отмена </el-button>
              <el-button type="primary" @click="dialogVisible = false">Ок </el-button>
            </span>
          </el-dialog>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "login",
  data() {
    return {
      valid: "222222",
      password: "",
      dialogVisible: false,
      correct: false,
      wrong: false,
      redirect: undefined,
      otherQuery: {}
    };
  },
  watch: {
    password: {
      handler() {
        if (this.password.length === 6) {
          this.login();
        }
      }
    }
  },
  methods: {
    ...mapActions({
      postLogin: "auth/login"
    }),
    login() {
      const loading = this.$loading({
        customClass: "login-loading",
        lock: true,
        text: "Загрузка",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });

      let is_loading = true;

      this.postLogin({ pin_code: this.password })
        .then(() => {
          loading.close();
          is_loading = false;
          this.password = "";
          this.$router.push("/");
        })
        .catch(err => {
          loading.close();
          is_loading = false;
          this.wrong = true;
          this.password = "";
          setTimeout(() => {
            this.wrong = false;
            this.password = "";
          }, 1000);
        });

      setTimeout(() => {
        if (is_loading) {
          // agar haliyam malumot kemagan bolsa obnavit knopkasini chiqaramiza
          loading.close();
          is_loading = false;
          const html =
            '<br><span onclick="location.reload()" class="refresh_button"><i class="el-icon-refresh-left"></i></span>';
          $(".el-loading-spinner").append(html);
        }
      }, 20000);
    },

    enter(number) {
      if (this.password.length < 6) {
        this.password += number;
      }
    },
    back() {
      if (this.password.length > 0) {
        this.password = this.password.slice(0, -1);
      }
    }
  }
};
</script>
<style lang="scss">
.login {
  // background-color: #3f648c;
  background-color: #10163a;
  display: flex;
  height: 98vh;
  padding-bottom: 2vh;
  align-items: flex-end;
  justify-content: space-around;
}

.login-logo {
  display: block;
  text-align: center;
}

// .login-logo img {
//   width: 200px;
// }

.login-block {
  display: block;
  flex-basis: 50%;
}

.login-block__dots {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 0;
}

.login-block__dot {
  display: block;
  width: 1em;
  height: 1em;
  border: 2px solid #ffffff;
  border-radius: 50%;
  margin-right: 1rem;
  padding: 0.3em;
}

.login-block__dot:last-child {
  margin-right: 0;
}

.login-block__circle {
  width: 70%;
  height: 70%;
  background-color: #fff;
  border-radius: 100%;
  opacity: 0;
}

.login-block__circle__active {
  opacity: 1;
}

.login-block__numbers {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}

.login-block__number {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-basis: 60px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: #10163a;
  font-size: 1.5rem;
  // margin-bottom: 0.5rem;
  margin: 0.3rem;
  box-shadow: 2px 2px 4px -2px grey;
  cursor: pointer;
  transition: all 0.5s ease;
  color: rgba(255, 255, 255, 0.7);
}

.login-block__number:hover {
  border: 1px solid #00c200;
  color: #ffffff;
}

.login-block__number:after:before {
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.login__text {
  display: block;
  text-align: center;
  color: #ffffff;
  font-size: 1em;
  margin-bottom: 1rem;
}

.login-correct {
  animation: correct 0.9s;
}

.login-wrong {
  animation: wrong 0.9s;
}

.login-loading .el-icon-loading {
  font-size: 4em;
}

.login-loading .el-loading-text {
  font-size: 24px;
}

.login-loading .refresh_button {
  font-size: 3em;
  cursor: pointer;
}

.login-loading .refresh_button i {
  color: white;
}

@keyframes correct {
  20% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(20px);
  }

  80% {
    transform: translateY(-10px);
  }
}

@keyframes wrong {
  20% {
    transform: translateX(0);
  }

  40% {
    transform: translateX(-20px);
  }

  60% {
    transform: translateX(40px);
  }

  80% {
    transform: translateX(-20px);
  }
}

.aliomas {
  width: 250px;

  .login-block__dot {
    width: 0.4em;
    height: 0.4em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.limer {
  .el-dialog {
    width: 95% !important;
  }
}

.home.login .haeder-content {
  z-index: 1999;
  box-shadow: none;
}
</style>
