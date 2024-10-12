import Image from "next/image";

export default function Home() {
  const recipes = [
    {
      id: 1,
      curry: 'Chicken Butter Masala',
      ingredients: 'Chicken, Salt, Pepper, Chilly Powder, Green Chillies, Chicken Masala, Turmeric, Butter, Lemon Juice, Oil'
    },
    {
      id: 2,
      curry: 'Mutton Masala',
      ingredients: 'Mutton, Salt, Pepper, Chilly Powder, Green Chillies, Mutton Masala, Turmeric, Lemon Juice, Oil'
    }
  ]

  return (
    <div style = {{ 'textAlign': 'center' }}>
      <h2 style={{ 'color':'Blue'}}>Welcome to Recipe List</h2>
      {recipes.map((recipe, index) => (
          <p key={index} style={{ 'color':'green'}}>
            <br></br>
            Item : {recipe.id}<br></br>
            Curry : {recipe.curry}<br></br>
            Ingredients: {recipe.ingredients}
          </p>
        ))}
    </div>
  );
}
