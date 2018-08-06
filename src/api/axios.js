if (process.env.NODE_ENV === 'development') {
  let axios = require('axios');
  let generator = require('./generator');
  let MockAdapter = require('axios-mock-adapter');

  let mock = new MockAdapter(axios);

  const state = {
    books: [],
    details: {}
  };

  // adds a list of 200 items to the state
  state.books = generator.createItems(200);
  state.details = generator.updateDetails(state.books, 'id');

  //========================== LEGEND ==========================//
  // CRUD - Create, Retrieve, Update, Delete
  //
  // GET /api/v1/items -> RETRIEVE list of items
  // GET /api/v1/items/:id -> RETRIEVE item details
  //
  // POST /api/v1/items -> CREATE new item
  //
  // -- COMING NEXT --
  //
  // PUT /api/v1/items/:id -> UPDATE existing item
  // PATCH /api/v1/items/:id -> UPDATE existing item
  // DELETE /api/v1/items/:id -> DELETE item
  //============================================================//

  //====================== RETRIEVE list =======================//
  mock.onGet('/api/v1/items').reply(function (config) {
    if (!config.pagination) {
      const allItems = {
        books: state.books.slice(),
        totalPages: 0,
        totalItems: state.books.length
      }

      return [200, allItems];
    }

    const {offset, count} = config.pagination;

    const paginatedItems = {
      books: state.books.slice(offset, offset + count),
      totalPages: Math.ceil(state.books.length / count),
      totalItems: state.books.length,
      offset,
      count
    };

    return [200, paginatedItems];
  });

  //====================== RETRIEVE details =======================//
  mock.onGet(/\/api\/v1\/items\/\d+/g).reply(function (config) {
    const id = config.url.split('/').reverse()[0];

    return [200, state.details[id]];
  });

  //====================== CREATE new item  =======================//
  mock.onPost('/api/v1/items').reply(function (config) {
    const newItem = generator.createItems(1, state.books.length + 1);
    state.books = state.books.concat(newItem);
    state.details = generator.updateDetails(state.books, 'id');

    const totalPages = Math.ceil(state.books.length / config.count);
    const offset = (totalPages - 1) * config.count;
    const newItemList = state.books.slice(offset, state.books.length);

    const newData = {
      books: newItemList,
      activePage: totalPages,
      totalPages: totalPages,
      totalItems: state.books.length,
      offset: offset,
      count: config.count
    };

    return [201, newData];
  });
}
