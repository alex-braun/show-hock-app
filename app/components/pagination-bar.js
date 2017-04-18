import Ember from 'ember';

function paginationXS(curr,i, total) {
  if (total <= 10) {
    return i;
  }

	if (total > 10) {
    	if (curr - 4 <= 1) {
      	if (i <= 8) {
        	return i;
        }
        else if (total - i === 1) {
        	return '...';
        }
        else if (total === i) {
        	return i;
        }
      }
      else if ((curr - 4) > 1 && (curr + 3) < total) {
      	if (i === 1) {
        	return i;
        } else if (i === 2) {
        	return '...';
        }	else if ((curr - i) <= 3 && (curr - i) > 0) {
        	return i;
        } else if (curr === i) {
        	return i;
        } else if (i - curr <= 2 && i - curr > 0) {
        	return i;
        } else if (total === i) {
        	return i;
        } else if (total - i === 1) {
        	return '...';
        }
  		}
      else if (curr + 3 >= total) {
      	if (i === 1) {
        	return i;
        }
        else if (i === 2) {
        	return '...';
        }
        else if (total - i <= 7) {
        	return i;
        }
      }
	}
}


function pagination(curr,i, total) {
	if (total > 13) {
  //page number is 7 or less
    	if (curr - 6 <= 1) {
      	if (i <= 11) {
        	return i;
        }
        else if (total - i === 1) {
        	return '...';
        }
        else if (total === i) {
        	return i;
        }
      }
   //page number is greater than 7 and more than 6 pages before total
      else if ((curr - 6) > 1 && (curr + 6) < total) {
      	if (i === 1) {
        	return i;
        } else if (i === 2) {
        	return '...';
        }	else if ((curr - i) <= 4 && (curr - i) > 0) {
        	return i;
        } else if (curr === i) {
        	return i;
        } else if (i - curr <= 4 && i - curr > 0) {
        	return i;
        } else if (total === i) {
        	return i;
        } else if (total - i === 1) {
        	return '...';
        }
  		}

   //curr page 3 or less away from the total
      else if (curr + 6 >= total) {
      	if (i === 1) {
        	return i;
        }
        else if (i === 2) {
        	return '...';
        }
        else if (total - i <= 10) {
        	return i;
        }
      }
	}
}

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['pagination-wrapper'],
  pageNumbers: Ember.computed('pages.current_page', function() {
    let num = Array(this.get('pages.total_pages'));
    for (let i = 0; i < num.length; i++) {
      num[i] = i + 1;
    }
    return num;
  }),

  displayedReg: Ember.computed('pageNumbers', function() {
    let pagesArr = this.get('pageNumbers');
    let curr = this.get('pages.current_page');
    	let arr = [];
    	for (let i = 1; i <= pagesArr.length; i++) {
    	   arr.push(pagination(curr, i, pagesArr.length));
    	}
      return arr.filter(function(n){ return n !== undefined; });
  }),

  displayedXS: Ember.computed('pageNumbers', function() {
    let pagesArr = this.get('pageNumbers');
    let curr = this.get('pages.current_page');
      let arr = [];
      for (let i = 1; i <= pagesArr.length; i++) {
         arr.push(paginationXS(curr, i, pagesArr.length));
      }
      return arr.filter(function(n){ return n !== undefined; });
  }),




//next button
  showNext: Ember.computed('pages.current_page', function() {
    return (this.get('pages.current_page') < this.get('pages.total_pages'));
  }),
//previous button
  showPrevious: Ember.computed('pages.current_page', function() {
    return (this.get('pages.current_page') > 1);
  }),


  actions: {

    newPage(page) {
      this.sendAction('newPage', page);
    },


    nextPage(page, total) {
      if (page < total) {
        let next = page + 1;
        this.sendAction('nextPage', next);
      }
    },

    previousPage(page) {
      if (page > 1) {
        let prev = page - 1;
        this.sendAction('previousPage', prev);
      }
    },

    pageClicked(pageNum) {
      this.set('pages.current_page', pageNum);
    }
  }
});
