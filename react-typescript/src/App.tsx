import React from 'react'

type TitleProps = {
  title: string,
  test?: string
}
//const Title: React.FC<{ title: string }> = ({ title, children }) => <h1>{title}</h1>
const Title = ({ title, test = "qqq" }: TitleProps) => <h1>{title}</h1>

const App = () => <Title title="test" />

export default App;