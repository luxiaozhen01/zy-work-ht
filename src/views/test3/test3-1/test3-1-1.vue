<template>
  <div class="container">
    <div class="title">新增二级商协议</div>
    <div class="main">
      <div class="top">
        <div class="top_title">
          <Title :num="1" :title="'协议主体'" />
        </div>
        <el-card
          class="top-card"
          shadow="never"
          :body-style="{ padding: '10px 30px' }"
        >
          <el-form :model="topForm" :rules="rules" ref="topForm">
            <el-col :span="12">
              <el-form-item prop="custom" label="协议客户：" >
                <el-select
                  size="mini"
                  v-model="topForm.custom"
                  placeholder="请选择"
                  style="width: 110px; margin-right: 10px"
                >
                  <el-option
                    v-for="item in companyList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label"
                  >
                  </el-option>
                </el-select>
                <span class="">{{ topForm.custom }}</span>
              </el-form-item>
              <el-form-item label="购进指标：">
                <el-select
                  size="mini"
                  v-model="topForm.procure.type"
                  placeholder="请选择"
                  style="width: 110px"
                >
                  <el-option
                    v-for="item in procureList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-input
                  size="mini"
                  v-model="topForm.procure.value"
                  placeholder="输入金额/数量"
                  style="width: 200px; margin-left: 10px"
                ></el-input>
              </el-form-item>
              <el-form-item label="销售区域：">
                <el-select
                  size="mini"
                  v-model="topForm.area"
                  placeholder="请选择"
                  style="width: 110px; margin-right: 10px"
                >
                  <el-option
                    v-for="item in areaList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label"
                  >
                  </el-option>
                </el-select>
                <span class="">{{ topForm.area }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="协议状态：">
                <el-select
                  size="mini"
                  v-model="topForm.state"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in stateList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="纯销指标：">
                <el-select
                  size="mini"
                  v-model="topForm.sale.type"
                  placeholder="请选择"
                  style="width: 110px"
                >
                  <el-option
                    v-for="item in procureList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-input
                  size="mini"
                  v-model="topForm.sale.value"
                  placeholder="输入金额/数量"
                  style="width: 200px; margin-left: 10px"
                ></el-input>
              </el-form-item>
              <el-form-item label="签订时间：">
                <el-date-picker
                  size="mini"
                  v-model="topForm.signTime"
                  type="datetime"
                  placeholder="选择日期"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="购进渠道：">
                <el-select
                  size="mini"
                  v-model="topForm.channe.value"
                  placeholder="指定渠道"
                  style="width: 110px"
                >
                  <el-option
                    v-for="item in channelList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-button size="mini" style="margin-left:10px">请选择渠道</el-button>
              </el-form-item>
              <el-form-item>
                <el-table
                  size="mini"
                  :data="tableData"
                  style="width: 90%; display: inline-block; margin-left: 82px"
                >
                  <el-table-column
                    prop="num"
                    label="指定渠道编码"
                  ></el-table-column>
                  <el-table-column
                    prop="name"
                    label="指定渠道名称"
                  ></el-table-column>
                  <el-table-column
                    prop="province"
                    label="所在省"
                  ></el-table-column>
                </el-table>
              </el-form-item>
            </el-col>
          </el-form>
        </el-card>
      </div>
      <div class="center">
        <div class="center_title">
          <Title :num="2" :title="'产品政策'" />
        </div>
        <div class="totalBox">
          <el-button type="primary" size="mini">添加产品</el-button>
          <div class="marginLeft">购进总指标（万元）：￥152.65</div>
          <div class="marginLeft">
            指标按季度分解（万元）：【Q1】￥12.5，【Q2】￥12.5，【Q3】￥12.5，【Q4】￥12.5
          </div>
          <div class="marginLeft">纯销总指标（万元）：￥152.65</div>
        </div>
        <el-card
          class="center-card"
          shadow="never"
          :body-style="{ padding: '10px 30px' }"
        >
          <div slot="header" class="card_top">
            <div class="top_left">
              <div>
                <span>产品：</span>
                <el-select
                  size="mini"
                  v-model="centerForm.company"
                  placeholder="请选择"
                  style="width: 110px; margin-right: 10px"
                >
                  <el-option
                    v-for="item in companyList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label"
                  >
                  </el-option>
                </el-select>
                <span class="">{{ centerForm.company }}</span>
              </div>
              <div style="margin-left: 30px">
                <span>协议效期：</span>
                <el-date-picker
                  size="mini"
                  v-model="centerForm.time"
                  type="daterange"
                  range-separator="~"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                >
                </el-date-picker>
              </div>
            </div>
            <div class="top_right">
              <el-button size="mini" type="warning" plain>删除</el-button>
            </div>
          </div>
          <div class="card_bottom">
            <el-table
              size="mini"
              :data="tableData1"
              style="border: solid 1px #f2f6fc"
            >
              <el-table-column label="协商价（元）">
                <template slot-scope="scope">
                  <el-input
                    v-model="centerForm.table1.value_1"
                    size="mini"
                    placeholder="请输入"
                  ></el-input>
                </template>
              </el-table-column>
              <el-table-column label="票折（元）">
                <template slot-scope="scope">
                  <el-input size="mini"  v-model="centerForm.table1.value_2" placeholder="请输入"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="购进指标量（大单位）">
                <template slot-scope="scope">
                  <el-input size="mini"  v-model="centerForm.table1.value_3" placeholder="请输入"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="购进指标量（小单位）">
                <template slot-scope="scope">
                  <el-input size="mini"  v-model="centerForm.table1.value_4" placeholder="请输入"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="购进金额（万元）">
                <template slot-scope="scope">
                  <el-input size="mini"  v-model="centerForm.table1.value_5" placeholder="请输入"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="纯销指标量（小单位）">
                <template slot-scope="scope">
                  <el-input size="mini"  v-model="centerForm.table1.value_6" placeholder="请输入"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="纯销指标金额（万元）">
                <template slot-scope="scope">
                  <el-input size="mini"  v-model="centerForm.table1.value_8" placeholder="请输入"></el-input>
                </template>
              </el-table-column>
            </el-table>
            <el-table
              size="mini"
              :data="tableData2"
              style="border: solid 1px #f2f6fc; margin-top: 10px"
            >
              <el-table-column label="分销奖励">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="centerForm.table2.value_1" placeholder="请输入"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="费用科目">
                <template slot-scope="scope">
                  <el-select
                    size="mini"
                    v-model="centerForm.table2.value_2"
                    placeholder="请选择"
                    style="width: 120px"
                  >
                    <el-option
                      v-for="item in typeList"
                      :key="item.value"
                      :label="item.type"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column label="零售配送">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="centerForm.table2.value_3" placeholder="请输入"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="费用科目">
                <template slot-scope="scope">
                  <el-select
                    size="mini"
                    v-model="centerForm.table2.value_4"
                    placeholder="请选择"
                    style="width: 120px"
                  >
                    <el-option
                      v-for="item in typeList"
                      :key="item.value"
                      :label="item.type"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column label="医疗配送商">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="centerForm.table2.value_5" placeholder="请输入"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="费用科目">
                <template slot-scope="scope">
                  <el-select
                    size="mini"
                    v-model="centerForm.table2.value_6"
                    placeholder="请选择"
                    style="width: 120px"
                  >
                    <el-option
                      v-for="item in typeList"
                      :key="item.value"
                      :label="item.type"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column label="自定义7">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="centerForm.table2.value_8" placeholder="请输入"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="自定义8">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="centerForm.table2.value_9" placeholder="请输入"></el-input>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
      <div class="bottom">
        <div class="bottom_title">
          <Title :num="2" :title="'产品政策'" />
        </div>
        <el-button class="delBtn" size="mini" type="warning" plain >删除</el-button>
         <el-tabs v-model="activeName" class="tab" type="card">
            <el-tab-pane label="补充协议1" name="first">
              <div class="remark">
                <div class="remark_title">协议内容：</div>
                <div class="remark_content">
                  <el-input v-model="bottomForm.remarkA" type="textarea"></el-input>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="补充协议2" name="second">
              <div class="remark">
                <div class="remark_title">协议内容：</div>
                <div class="remark_content">
                  <el-input v-model="bottomForm.remarkB" type="textarea"></el-input>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="补充协议3" name="three">
              <div class="remark">
                <div class="remark_title">协议内容：</div>
                <div class="remark_content">
                  <el-input v-model="bottomForm.remarkC" type="textarea"></el-input>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
      </div>
      <div class="saveBox">
        <el-button class="savebtn" @click="savaData" type="primary">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/title";
export default {
  components: {
    Title,
  },
  data() {
    return {
      topForm: {
        custom: "",
        state: "0",
        area:'',
        procure: {
          type: "0",
          value: "",
        },
        sale: {
          type: "0",
          value: "",
        },
        channe: {
          value: "",
        },
        signTime: "",
      },
      centerForm:{
        company:'',
        time:'',
        table1:{
          value_1:'',
          value_2:'',
          value_3:'',
          value_4:'',
          value_5:'',
          value_6:'',
          value_7:'',
          value_8:'',
        },
        table2:{
          value_1:'',
          value_2:'',
          value_3:'',
          value_4:'',
          value_5:'',
          value_6:'',
          value_7:'',
          value_8:'',
          value_9:'',
        }
      },
      bottomForm:{
        remarkA:'',
        remarkB:'',
        remarkC:'',
      },
      rules:{
        custom:[ { required: true, message: '请选择协议客户', trigger: 'blur' },]
      },
      companyList: [
        {
          value: "0",
          label: "上海正也医药有限公司",
        },
        {
          value: "1",
          label: "测试公司",
        },
      ],
      stateList: [
        {
          value: "0",
          label: "正常",
        },
        {
          value: "1",
          label: "完结",
        },
      ],
      areaList:[
        {
          value: "0",
          label: "全国",
        },
        {
          value: "1",
          label: "上海",
        },
      ],
      procureList: [
        {
          value: "0",
          label: "金额",
        },
        {
          value: "1",
          label: "数量",
        },
      ],
      channelList: [
        {
          value: "0",
          label: "渠道一",
        },
        {
          value: "1",
          label: "渠道二",
        },
      ],
      tableData: [
        {
          num: "BJ000090",
          name: "宁波九州通药业有限公司",
          province: "浙江省",
        },
        {
          num: "BJ000192",
          name: "国药控股精华有限公司",
          province: "浙江省",
        },
        {
          num: "BJ000283",
          name: "老百姓药业有限公司",
          province: "浙江省",
        },
      ],
      tableData1: [
        {}
      ],
      tableData2: [
        {}
      ],
      typeList: [
        {
          value: "1",
          type: "科目一",
        },
        {
          value: "2",
          type: "科目二",
        },
      ],
      activeName:'first'
    };
  },
  methods:{
    savaData(){
       this.$refs['topForm'].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  }
};
</script>

<style lang='scss' scoped>
.el-form-item {
  margin: 0;
}
::v-deep {
  .el-table--mini .el-table__cell {
    padding: 0;
  }
  .el-form-item__error{
    position: relative;
    left: 100px;
  }
  .el-table__body-wrapper{
    padding: 3px 0;
  }
}
.container {
  width: 100%;
  height: calc(100vh - 90px);
  .main{
    width: 100%;
    height: calc(100vh - 120px);
    // background-color: blue;
    overflow: auto;
  }
  .title {
    width: 100%;
    line-height: 30px;
    background-color: #fff;
    padding-left: 30px;
    font-size: 18px;
  }
  .top {
    padding: 0 20px;
    .top_title {
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      .top-card {
        width: 100%;
        background-color: #fff;
      }
    }
  }
  .center {
    padding: 0 20px;
    .center_title {
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
    }
    .totalBox {
      line-height: 30px;
      // background-color: red;
      display: flex;
      font-size: 14px;
      .marginLeft {
        margin-left: 40px;
      }
    }
    .center-card {
      margin-top: 10px;
      .card_top {
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        .top_left {
          display: flex;
        }
      }
    }
  }
  .bottom {
    padding: 0 20px;
    position: relative;
    .bottom_title {
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      
    }
    .delBtn{
      position: absolute;
      right: 60px;
      top: 35px;
    }
    .tab{
      background-color: #fff;
      .remark{
        padding: 10px;
        .remark_content{
          margin-top: 10px;
          margin-bottom: 30px;
        }
      }
    }
  }
  .saveBox{
    width: 100%;
    line-height: 80px;
    background-color: #fff;
    margin-top: 30px;
    .savebtn{
      margin-left: 30px;
    }
  }
}
</style>