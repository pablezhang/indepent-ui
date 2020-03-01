import React from 'react';
import {observer} from 'mobx-react'
import Mod from "./Mod";
import {Button} from 'antd'


@observer
export default class View extends React.Component<any, any>{
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div>
        <Button onClick={Mod.refresh}>刷新</Button>
        22aa + {Mod.version}
      </div>
    )
  }
}
