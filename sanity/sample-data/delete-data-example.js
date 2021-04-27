 

import client from 'part:@sanity/base/client';

client
  // .delete({ query: '*[!defined(name) && _type == "topping"] ' })
  .delete({ query: '*[_type == "pizza"] ' })
  .then(console.log)
  .catch(console.error);
