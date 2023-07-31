<template>
    <div class="line">
        <div class="line_content">
            <div class="num">{{num}}</div>
            <div class="text">{{title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        num:{
            type:Number,
            default:0
        },
        title:{
            type:String,
            default:''
        }
    }
}
</script>

<style lang='scss' scoped>
    .line{
            width: 100%;
            border: 1px dashed #EBEEF5;
            position: relative;
            .line_content{
              height: 30px;
              top: -15px;
              left: 50%;
              transform: translateX(-50%);
              background-color: #F2F6FC;
              position: absolute;
              display: flex;
              align-items: center;
              .num{
                width: 16px;
                line-height: 16px;
                background-color: blue;
                border-radius: 50% 50%;
                text-align: center;
                font-size: 14px;
                color: #fff;
                font-weight: bold;
                margin-right: 5px;
              }
              .text{
                line-height: 30px;
                font-size: 16px;
                font-weight: bold;
              }
            }
          }

</style>