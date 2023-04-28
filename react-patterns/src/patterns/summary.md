# Reactのデザインパターンまとめ

## 重要な基本的パターン

### Component

Props: `Component`の引数、基本的には下のパターンがいい

```ts
type PersonType = {
  name: string;
  age: number;
  other: any;
}
const Person = ({ name='default', age, ...other }: PersonType) => {
  return (
    <p>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{...other}</p>
    </p>
  )
}
```