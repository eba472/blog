  .v-text-field--box .v-input__slot,
  .v-text-field--outline .v-input__slot {
    min-height: auto !important;
    display: flex !important;
    align-items: center !important;
  }


        <v-select
        placeholder="記録者名"
        :items="['看護師1', '看護師2', '看護師3', '看護師4']"
        variant="outlined"
        bg-color="white"
        density="compact"
        class="inline-flex self-center care-select"
        height="48"
        width="100"
      />