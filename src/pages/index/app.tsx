import React from 'react';

interface IDemoLink {
    text: string;
    link: string;
}

export default class App extends React.PureComponent<{
    demos?: IDemoLink[],
}> {
      render() {
          const { demos = []} = this.props;
          return <>
          <header>
              <h2>Canvas示例</h2>
          </header>
          <ol>
              {demos.map((demo) => {
                  return <li><a href={demo.link}>{demo.text}</a></li>;
              })}
          </ol>
          </>;
      }
  }
