
<template>
<h1>User View {{$route.params.id}}</h1>
<h2 v-if="$route.params.id === 1">this is user 1</h2>
<h2 v-if="$route.params.id === 2"> this is user 2</h2>
</template>
