/*
    205410072
    MUHAMMAD ANGGER CHOIRUL UMAM
*/
new Vue({
    el: '#vue',
    data: {
      parentMessage: 'Parent',
      search: '',
      products: [
        {
            id: 1,
            kode: 'CHIKI1',
            nama: 'Malkist Abon',
            harga: 3000,
            ids: 'malkistabon',
            jumlah: 0
        },
        {
            id: 2,
            kode: 'CHIKI2',
            nama: 'Oreo',
            harga: 4000,
            ids: 'oreo',
            jumlah: 0
        },
        {
            id: 3,
            kode: 'CHIKI3',
            nama: 'Chiki 20gr',
            harga: 2000,
            ids: 'mhiki20gr',
            jumlah: 0
        },
        {
            id: 4,
            kode: 'CHIKI4',
            nama: 'BengBeng Small',
            harga: 1500,
            ids: 'bengbengsmall',
            jumlah: 0
        },
        {
            id: 5,
            kode: 'CHIKI5',
            nama: 'Roma Wafer',
            harga: 2000,
            ids: 'romawafer',
            jumlah: 0
        },
        {
            id: 6,
            kode: 'CHIKI6',
            nama: 'Nussin',
            harga: 5000,
            ids: 'nussin',
            jumlah: 0
        }
      ]
    },
    computed: {
        CariBarang(){
          if(this.search){
            return this.products.filter((item)=>{
                return item.nama.toLowerCase().startsWith(this.search.toLowerCase());
            })
          }else{
            return this.products;
          }
        },
        TabelBarang(){
            return this.products.filter((item)=>{
                return item.jumlah>0
            })
        },
        jumlahbarang: function() {
            return this.products.reduce(function(sum, item) {
                return sum+item.jumlah;
            },0)
        },
        totalharga: function() {
            return this.products.reduce(function(sum, item) {
                return sum+item.jumlah*item.harga;
            },0)
        }
    }
})