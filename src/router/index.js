import { createRouter, createWebHistory } from 'vue-router'

import Paciente_Prelim from '@/views/Paciente_Prelim.vue'
import Admission from '@/views/Admission.vue'

const router = createRouter({

history:createWebHistory(),

routes:[

{
    path:'/',
    name:'Paciente_Prelim',
    component:Paciente_Prelim
  },
  {
    path:'/admissions',
    name:'Admissions',
    component:Admission
  }

]

})

export default router