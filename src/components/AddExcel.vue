<template>
    <v-container>
        <v-col>
            <v-row>
                <label for="doc">Choisissez un document </label>
                <input type="file" id="doc" name="doc" accept=".xlsm">
            </v-row>
            <v-btn>Envoyer</v-btn>
        </v-col>
        
    </v-container>

</template>

<script>
import { component } from 'vue/types/umd';

export default {
    name: "AddExcel",

    components: { component }
    
}
</script>