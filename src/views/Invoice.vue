<template>
  <div>
    <button type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            @click="open = true">
      Crear Factura
    </button>

    <div class="mx-5 mt-5">
      <div class="flex items-center bg-green-500 border-l-4 border-green-700 py-2 px-3 shadow-md mb-2"
           @click="toastSuccess = false" v-if="toastSuccess">
        <div class="text-green-500 rounded-full bg-white mr-3">
          <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
          </svg>
        </div>
        <div class="text-white max-w-xs ">
          Factura creada con exito
        </div>
      </div>

      <div class="flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2"
           @click="toastError = false" v-if="toastError">
        <div class="text-red-500 rounded-full bg-white mr-3">
          <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
            <path fill-rule="evenodd"
                  d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
          </svg>
        </div>
        <div class="text-white max-w-xs ">
          Ocurrio un error
        </div>
      </div>
    </div>

    <div class="flex flex-col mt-5">
      <div class="-my-2 overflow-x-auto sm:-mx-5 lg:-mx-5">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID de Promocion
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  IDs de Medicinas
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Precio Total
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha de Creacion
                </th>
              </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="invoice in invoices" :key="invoice.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ invoice.promotion_id }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ invoice.medicines_ids }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{ invoice.total_price }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{ invoice.created_at }}
                  </span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                         leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300"
                         enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                         enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                         leave-from="opacity-100 translate-y-0 sm:scale-100"
                         leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div
              class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="mt-10 sm:mt-0">
                <div class="md:gap-6">

                  <Listbox as="div" v-model="selected">
                    <ListboxLabel class="block text-sm font-medium text-gray-700">
                      Agregar Medicina
                    </ListboxLabel>
                    <div class="mt-1 relative">
                      <ListboxButton
                          class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span class="flex items-center">
                          <span class="ml-3 block truncate">{{ selected.name }}</span>
                        </span>
                        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
                        </span>
                      </ListboxButton>

                      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                                  leave-to-class="opacity-0">
                        <ListboxOptions
                            class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                          <ListboxOption as="template" v-for="medicine in medicines" :key="medicine.id" :value="medicine"
                                         v-slot="{ active, selected }">
                            <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                              <div class="flex items-center">
                                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                                  {{ medicine.name }}
                                </span>
                              </div>

                              <span v-if="selected"
                                    :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                <CheckIcon class="h-5 w-5" aria-hidden="true"/>
                              </span>
                            </li>
                          </ListboxOption>
                        </ListboxOptions>
                      </transition>
                    </div>
                  </Listbox>

                  <div class="flex flex-col mt-5">
                    <div class="-my-2 overflow-x-auto sm:-mx-5 lg:-mx-5">
                      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                            <tr>
                              <th scope="col"
                                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nombre
                              </th>
                              <th scope="col"
                                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Precio
                              </th>
                            </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="medicine in medicines_cart" :key="medicine.id">
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                  <div class="ml-4">
                                    <div class="text-sm font-medium text-gray-900">
                                      {{ medicine.name }}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ medicine.price }}</div>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mt-5 md:mt-0 md:col-span-3">
                    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                      <div class="px-4 py-5 sm:px-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                          Detalles
                        </h3>
                      </div>
                      <div class="border-t border-gray-200">
                        <dl>
                          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                              Porcentaje descuento
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0">
                              {{ promotion.percentage }}
                            </dd>
                          </div>
                          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                              Subtotal
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0">
                              {{ promotion.percentage }}
                            </dd>
                          </div>
                          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                              Total
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0">
                              {{ promotion.percentage }}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {ref} from "vue";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions
} from '@headlessui/vue'
import {CheckIcon, SelectorIcon} from '@heroicons/vue/solid'
import axios from "axios";

export default {
  name: "Invoice",
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon,
  },
  data() {
    return {
      toastSuccess: false,
      toastError: false,
      medicines_cart: ref([]),
      medicines: ref([]),
      invoices: ref([]),
      invoice: ref({
        id: 0,
        promotion_id: '',
        medicines_ids: [],
        total_price: 0.0
      }),
      promotion: ref({
        id: 0,
        description: '',
        percentage: 0,
        start_date: '',
        finish_date: ''
      }),
    }
  },
  methods: {
    getNow() {
      const today = new Date();
      const date = today.getFullYear() + '-' + this.formatDate(today.getMonth() + 1) + '-' + this.formatDate(today.getDate());
      const time = today.getHours() + ":" + this.formatDate(today.getMinutes()) + ":" + this.formatDate(today.getSeconds());
      return `${date}T${time}Z`
    },

    formatDate(date) {
      if (date.toString().length === 1) {
        return '0' + date
      }

      return date
    },

    async getPromotionByDate(date) {
      axios.get(`${process.env.VUE_APP_API}/v1/promotion/by-date?date=${date}`)
          .then(response => {
            this.promotion = response.data.data
          })
          .catch((err) => {
            console.log(err)
          });
    },

    async getInvoices() {
      axios.get(`${process.env.VUE_APP_API}/v1/invoice`)
          .then(response => {
            this.invoices = response.data.data
          })
          .catch((err) => {
            console.log(err)
          });
    },

    async getMedicines() {
      axios.get(`${process.env.VUE_APP_API}/v1/medicine`)
          .then(response => {
            this.medicines = response.data.data
          })
          .catch((err) => {
            console.log(err)
          });
    },

    async save() {
      axios.post(`${process.env.VUE_APP_API}/v1/invoice`, this.invoice)
          .then((response) => {
            console.log(response.data)
            this.toastSuccess = true
            this.getInvoices()
          })
          .catch((err) => {
            this.toastError = ref(true)
            console.log(err)
          });
    }
  },
  mounted() {
    this.getInvoices()
    this.getPromotionByDate(this.getNow())
  },
  setup() {
    const open = ref(false)
    const selected = ref(this.medicines[3])

    return {
      open,
      selected,
    }
  }
}
</script>

<style scoped>

</style>
