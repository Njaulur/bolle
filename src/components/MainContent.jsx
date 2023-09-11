

const products = [
  {
    id: 1,
    name: 'shoe',
    description: 'Description for shoe 1',
    price: 19.99,
    image: '/images/shoe1.jpg'
  },
  {
    id: 2,
    name: 'shoe 2',
    description: 'Description for shoe 2',
    price: 204.99,
    image: '/images/shoe2.jpg',
  },
  {
    id: 3,
    name: 'shoe 3',
    description: 'Description for shoe 3',
    price: 10000.99,
    image: '/images/shoe3.jpg',
  },
  {
    id: 4,
    name: 'shoe 3',
    description: 'Description for shoe 3',
    price: 199.99,
    image: '/images/shoe3.jpg',
  }
];

function MainContent() {
  return (
    <main>
      <section>
        <h2>Shop</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price.toFixed(2)}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
export default MainContent;