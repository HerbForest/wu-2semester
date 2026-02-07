<script setup>
import { ref } from "vue";
let bookList = ref([
    {
        id: 0,
        title: "harry Potter",
        author: "jk rowling",
    },
    {
        id: 1,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
    },
    {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
    },
    {
        id: 4,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
    },
]);
</script>
<template>
    <ul>
        <li v-for="book in bookList">
            book id: {{ book.id }} the book title : {{ book.title }} the book
            title : {{ book.author }}
        </li>
    </ul>
</template>
