<script setup lang="ts">
import {findAllLawyer, modifyLawyer, addLawyer, removeLawyer} from '~/api/lawyer'
import {ElMessage} from "element-plus";
const tableData = ref([])
const modifyFormVisible = ref(false)
const lawyerInfo = reactive({})
const addFormVisible = ref(false)
const addLawyerInfo = reactive({})

onMounted(() => {
  findAllLawyer().then((res) => {
    tableData.value = res.data.lawters
  })
})

const clickModify = (index: number) => {
  modifyFormVisible.value = true
  Object.assign(lawyerInfo, tableData.value[index])
}

const clickDelete = (index: number) => {
  removeLawyer(tableData.value[index].teacherId).then((res: any) => {
    if (res.code === 20000) {
      ElMessage({
        type: 'success',
        message: '删除成功',
      })
      findAllLawyer().then((res) => {
        tableData.value = res.data.lawters
        addFormVisible.value = false
      })
    }
  })
}

const confirmModify = () => {
  modifyLawyer({
    teacherId: lawyerInfo.teacherId,
    name: lawyerInfo.name,
    introduce: lawyerInfo.introduce,
    pic: lawyerInfo.pic,
  }).then((res: any) => {
    if (res.code === 20000) {
      ElMessage({
        type: 'success',
        message: '修改成功',
      })
      findAllLawyer().then((res) => {
        tableData.value = res.data.lawters
        modifyFormVisible.value = false
      })
    }
  })
}
const cancelModify = () => {
  modifyFormVisible.value = false
}

const cancelAdd = () => {
  addFormVisible.value = false
}
const confirmAdd = () => {
  addLawyer({
    name: addLawyerInfo.name,
    introduce: addLawyerInfo.introduce,
    pic: addLawyerInfo.pic,
  }).then((res: any) => {
    if (res.code === 20000) {
      ElMessage({
        type: 'success',
        message: '新建成功',
      })
      findAllLawyer().then((res) => {
        tableData.value = res.data.lawters
        addFormVisible.value = false
      })
    }
  })
}

</script>

<template>
  <div class="modify-container px-10vw">
    <div class="my-2rem addLawyer">
      <el-button type="success" @click="addFormVisible = true">增加律师</el-button>
    </div>
    <div class="mx-auto my-2rem w-1200px">
      <el-table
        :data="tableData"
        style="width: 100%"
        border
      >
        <el-table-column label="序号"  type="index" align="center"/>
        <el-table-column label="律师名称"  prop="name" align="center"/>
        <el-table-column label="律师简介"  prop="introduce" align="center"/>
        <el-table-column label="律师图片" align="center"  width="200px">
          <template #default="scope">
            <img :src="scope.row.pic">
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" fixed="right" width="200px">
          <template #default="scope">
            <el-button size="small" type="primary" @click="clickModify(scope.$index)">修改</el-button>
            <el-button size="small" type="warning" @click="clickDelete(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-dialog v-model="modifyFormVisible" title="律师信息修改" center @close="cancelModify()">
        <el-form :model="lawyerInfo" label-width="80px">
          <el-form-item label="律师名称" >
            <el-input v-model="lawyerInfo.name" />
          </el-form-item>
          <el-form-item label="律师简介" >
            <el-input v-model="lawyerInfo.introduce" />
          </el-form-item>
          <el-form-item label="律师图片" >
            <el-input v-model="lawyerInfo.pic" />
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer" >
            <el-button @click="cancelModify()">
              取消
            </el-button>
            <el-button type="primary" @click="confirmModify()">
              保存
            </el-button>
          </div>
        </template>
      </el-dialog>
    </div>
    <div>
      <el-dialog v-model="addFormVisible" title="新增律师" center @close="cancelAdd()">
        <el-form :model="addLawyerInfo" label-width="80px">
          <el-form-item label="律师名称" >
            <el-input v-model="addLawyerInfo.name" />
          </el-form-item>
          <el-form-item label="律师简介" >
            <el-input v-model="addLawyerInfo.introduce" />
          </el-form-item>
          <el-form-item label="律师图片" >
            <el-input v-model="addLawyerInfo.pic" />
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer" >
            <el-button @click="cancelAdd()">
              取消
            </el-button>
            <el-button type="primary" @click="confirmAdd()">
              新建
            </el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<style scoped>
:deep(.addLawyer > button) {
  background-color: #67c23a;
}
:deep(.el-button--primary ) {
  background-color: #409eff;
}
:deep(.el-button--warning ) {
  background-color: #e6a23c;
}
</style>
