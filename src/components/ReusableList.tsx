import React from 'react';

interface ReusableListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

export default function ReusableList<T> (props: ReusableListProps<T>) {
  return (
    <div>
      {props.items.map(props.renderItem)}
    </div>
  );
};
