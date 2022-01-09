<template>
  <nav>
    <div class="bg-indigo-600">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between">
          <div class="fex space-x-4">
            <div class="flex items-center space-x-1">
              <router-link class="py-5 px-2 text-indigo-200 hover:text-indigo-400" to="/">Inicio</router-link>
              <router-link class="py-5 px-2 text-indigo-200 hover:text-indigo-400" to="/medicinas">Medicinas</router-link>
              <router-link class="py-5 px-2 text-indigo-200 hover:text-indigo-400" to="/promociones">Promociones</router-link>
              <router-link class="py-5 px-2 text-indigo-200 hover:text-indigo-400" to="/facturas">Facturas</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="mx-5 mt-5">
    <router-view/>
  </div>
</template>

<style>
nav div div div div div a.router-link-exact-active {
  color: #ffffff;
}
</style>
