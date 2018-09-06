import React from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

class SimpleTabs extends React.Component {
    state = {
        value: 1,
        /*tabs: [
            {
                id: 0,
                label: 'Tab 1',
                content: 'Mi contenido 1',
            },
            {
                id: 1,
                label: 'Tab 2',
                content: 'Mi contenido 2',
            }
        ],*/
    };

    handleChange = (event, value) => {        
        this.setState({ value });
    };
    
    /*handleAddTab = (id, label, content) => {
        const newTab = {
            id,
            label,
            content
        }   
        const currentTabs = this.state.tabs;
        this.setState({tabs: currentTabs.concat([newTab])});     
        //this.setState({tabs: [...currentTabs, ...[newTab]]});
    };*/

    renderTabContent(tabs, value) {
        return <TabContainer>{tabs[value].content}</TabContainer>
    };

    render() {
        //const { classes } = this.props;
        const {tabs} = this.props;
        const {value} = this.state;
        {/*REPRESENTACIÓN LARGA DE LA LINEA ANTERIOR
        const obj = this.state;
        const value = obj.value;
        const tabs = obj.tabs;
        */}
        const tabsItems = tabs.map((tab) =>
            <Tab label={tab.label} />
        );

        return (
            <div>
                <Tabs value={value} onChange={this.handleChange}>
                    {tabsItems}
                    {/*<Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" href="#basic-tabs" />*/}
                </Tabs>
                {this.renderTabContent(tabs, value)}
            </div>
        );
    }
}

export default SimpleTabs;