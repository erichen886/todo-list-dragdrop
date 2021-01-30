/* The card components and lists are all similar components

(className, childComponent, state) => {
  return (props) => {
    {cards} = props;
    return (
      <div className={className}>
      {cards.map(card =>{
        return childComponent(card);
      }
      )}
      </div>
      );
    };
  }

  (className) => {
    return (props) => {
      {title, text, avatar} = props;
      return (
        <div className={className}>
        <div>{title}</div>
        <div>{text}</div>
        <div>{avatar}</div>
        </div>
        );
      };

    }
    */