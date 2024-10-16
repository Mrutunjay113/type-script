export default function Button() {
  //variable declaration

  const name: string = "John";
  const age: number = 25;

  //function declaration

  function convertCurrency(amount: number, currency: string): void {
    console.log(`Converting ${amount} to ${currency}`);
  }
  convertCurrency(100, "USD");
  return (
    <button className="bg-blue-500 text-lg text-white rounded px-4 py-2 w-fit h-fit">
      Click me!
    </button>
  );
}
