
class Entity {
}

class Query {

  constructor(entity) {
    this[Symbol.iterator] = function* () {
      let provider = new Provider();

      yield this.exec(provider, 'a');
      yield this.exec(provider, 'b');
      yield this.exec(provider, 'c');
    };
  }

  exec(provider, file) {
    return provider.exec(file);
  }

  where(predicate) { return this; }
  select(fields) { return this; }
}

class Provider {

  exec(file) {
    return this.retrieve(file);
  }

  async retrieve(file) {
    let result = await fetch(`../data/${file}.json`, { mode: 'no-cors' });
    let json = await result.json();

    console.log(`Fetched: ${file}`);

    return json;
  }
}

async function getResults() {
  var query = new Query(Entity);

  var items = query.select(c => c).where(c => c.id === 10);

  for await (let item of items) {
    console.log(`Retrieved: ${JSON.stringify(item)}`);
  }
}

getResults();
