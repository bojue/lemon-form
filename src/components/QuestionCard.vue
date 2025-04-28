<template>

  <div class="open">
    <div class="open-content-bg">
      <div class="open-content">
        <span class="layout-3"></span>
        <div class="question">
          作为商业产品，你们为什么开源?
        </div>
        <div class="ask">
          <span class="per">
            借用开源前辈<span class="auth" title="TDengine核心开发、涛思数据创始人">Jeff Tao
            </span>的一句话：
          </span>

          <div class="info">
            <span class="info-bef">“</span>
            在作出开源的决定时，我认为开源就一定要将最核心的代码开源，因为只有给用户带来真正的价值，将自己的技术创新、绝招完全展现给大家，才能获得开发者的喜爱。
            <span class="info-aft">”</span>
          </div>
        </div>
      </div>
    </div>
    <div class="open-content-bg">
      <div class="open-content">
        <div class="question">
          产品计划如何盈利?
        </div>
        <div class="ask">
          <div class="info ">
            <ul>
              <li v-for="item in ['私有化部署', '定制开发', '技术培训']">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <span class="layout-1"></span>
        <span class="layout-2"></span>
        <span class="layout-4"></span>
      </div>
    </div>
  </div>
  
</template>
<script setup lang="ts">
import { ref, h } from 'vue';


</script>

<style scoped lang="scss">
.open {
  text-align: center;
  text-align: -webkit-center;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px;

  .open-content-bg {
    padding: 0px;
    border-radius: 10px;
    background: black;
    width: 400px;
    transform: rotate(0deg); 
    margin: 70px 25px 0 ;
    height: 210px;
  }

  .open-content {
    background: white;
    color: #666;
    border-radius: 10px;
    padding: 20px;
    width: 400px;
    height: 210px;
    transform: rotate(-3deg);
    border:1px solid black;
    transform-origin: top left;
    position: relative;
    overflow: hidden;
  }
}

.question {
  text-align: left;
  padding-bottom: 8px;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
  color: black;
  &::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    background: black;
    margin-right: 10px;
  }
}

.ask {
  font-size: 16px;
  text-align: left;

  .per {
    display: inline-block;
    margin-bottom: 10px;
  }
}



.auth {
  font-size: 16px;
  font-weight: 500;
  color: #000;
}

.auth-info {
  padding: 0 10px;
  font-size: 12px;
  color: #000;
}

.info-bef,
.info-aft {
  color: mediumvioletred;
  font-size: 40px;
}

.info-aft {
  color: cadetblue;
  position: absolute;
}

.info {
  ul {
    height: 30px;
    line-height: 30px;
  }
}

.layout-1,
.layout-2,
.layout-3,
.layout-4 {
  position: absolute;
  left: 70px;
  background: yellowgreen;
  width: 100px;
  height: 100px;
  z-index: 0;
  bottom: -40px;
  border-radius: 50%;
  z-index: -1;
}

.layout-2 {
  background: gold;
  left: 270px;
  bottom: 130px;
  border-radius: 0;
  transform: rotate(35deg);
}

.layout-3 {
  background: tomato;
  left: 220px;
  bottom: 50px;
  width: 100px;
  border-radius: 50%;
  height: 100px;
  transform: rotate(35deg);
  clip-path: circle(50% at 30% 50%);
}

.layout-4 {
  width: 100px;
  height: 100px;
  bottom: -30px;
  left: 340px;
  background: #fff;
  border:10px solid forestgreen;
}
</style>
