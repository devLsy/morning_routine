// 페이징 관련 전역 컴포넌트
Vue.component('paging-component', {
    props: ['currentPage', 'firstPage','lastPage', 'startIdx', 'endIdx'],
    computed: {
    //페이징 개수 세팅
        pagedArray() {
            const pagedArr = [];
                for (let i = this.startIdx; i <= this.endIdx; i++) {
                    pagedArr.push(i);
                }
            return pagedArr;
        },
    },
    methods: {
       movePage(page) {
         //부모 컴포넌트에게 이벤트 발생 시켜서 page 전달
         this.$emit('update:current-page', page);
       },
     },
    //페이지네이션 템플릿
    template: `        
        <div class="paging tbl-paging">
          <ul class='pagination'>
            <!--first-->
            <li class='paginate_button page-item first'>
              <button
                type='button'
                class='page-link'
                :style="{ cursor: currentPage !== firstPage ? 'pointer' : 'default' }"
                :disabled="currentPage === firstPage"
                @click="movePage(firstPage)"    
              > 
                <span class='hidden'>첫 페이지</span>
              </button>
            </li>
            <!--prev-->
            <li class='paginate_button page-item prev'>
              <button
                type='button'
                class='page-link'
                :style="{ cursor: currentPage !== firstPage ? 'pointer' : 'default' }"
                :disabled="currentPage === firstPage"
                @click="movePage(currentPage - 1)"
              >         
                <span class='hidden'>이전 페이지</span>
              </button>
            </li>   
            <!--① ~ ⑩-->    
            <li         
              class='paginate_button page-item'
              v-for="(page, index) in pagedArray"
              :key="index"  
              :class="{ 'active': currentPage === page }"
              @click="movePage(page)"       
            >                            
              <button type='button' class='page-link' style='cursor: pointer;'>
                {{ page }}
              </button>  
            </li>
            <!--next-->
            <li class='paginate_button page-item next'>
              <button
                type='button'
                :disabled="currentPage === lastPage"
                class='page-link'
                :style="{ cursor: currentPage !== lastPage ? 'pointer' : 'default' }"
                @click="movePage(currentPage + 1)"
              >     
                <span class='hidden'>다음 페이지</span>
              </button>
            </li>
            <!--last-->
            <li class='paginate_button page-item last'>
              <button
                type='button'
                :disabled="currentPage === lastPage"    
                class='page-link'
                :style="{ cursor: currentPage !== lastPage ? 'pointer' : 'default' }"
                @click="movePage(lastPage)"
              >         
                <span class='hidden'>마지막 페이지</span>
              </button>
            </li>
          </ul>
        </div>
      `,
});