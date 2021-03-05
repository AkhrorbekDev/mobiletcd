export default {
  data() {
    return {
      realization_materials: false,
      model: {
        id: '',
        name: '',
      },
    };
  },
  methods: {
    fetchData() {
      let selected; let
        selectedType = Boolean;
      if (this.selected == 1) {
        selected = 1;
        selectedType = 0;

        if (this.selectedType == 'По штрих-коду') {
          selectedType = 1;
        }
      }
      if (this.selected == 0) {
        selected = 0;
        selectedType = 0;
      }

      if (!this.loading) {
        this.updateList({ selected, selectedType })
          .then((res) => {
            this.loading = false;
          }).catch((err) => {
            this.loading = false;
          });
      }
    },
    showing(item) {
      this.model.realization_id = item.id;
      this.model.id = item.realizationable_id;
      this.model.name = item.realizationable_type;
      this.realization_materials = true;
    },
    handleClose(done) {
      this.$confirm('Вы уверены, что хотите закрыть это?')
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    afterOpened() {
      this.$refs.realizationMaterials.fetchData(this.model);
    },
    closeRealizationMaterials() {
      this.fetchData();
      this.realization_materials = false;
    },
  },
};
