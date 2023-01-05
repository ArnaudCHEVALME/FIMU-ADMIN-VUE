<template>
    <v-container>
        <v-col>
            <v-row>
                <label for="doc">Choisissez un document </label>
                <input type="file" id="doc" name="doc" accept=".xlsm">
            </v-row>
            <v-btn @click="docEnvoie">Envoyer</v-btn>
        </v-col>
    </v-container>
</template>

<script>
export default {
    name: "AddExcel",

    data: () => {
        File
    },

    methods: {
        docEnvoie(){
            file=document.querySelector('doc');
            console.log(this.file);
            return file;
        }
    },
}
</script>