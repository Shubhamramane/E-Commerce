import React, { useState } from 'react';
import '../SelectDropdown/Select.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { Icon } from '@mui/material';


const Select = ({ data, placeholder, icon }) => {

    const [isopenSelect, setIsOpenSelect] = useState(false)
    const [selectIndex, setSelectIndex] = useState(0)
    const [selectItem, setSelectItem] = useState(placeholder)
    const [listData, setListData] = useState(data)
    const [listData2, setListData2] = useState(data)

    const openSelect = () => {
        setIsOpenSelect(!isopenSelect)
    }

    const closeSelect = (index, name) => {
        setSelectIndex(index)
        setIsOpenSelect(false)
        setSelectItem(name)
    }

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase()

        const list = listData2.filter((item) => {
            return item.toLowerCase().includes(keyword)
        })

        const list2 = list.filter((item, index) => {
            return list.indexOf(item) === index
        })

        setListData(list2)
    }

    return (
        <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
            <div className='selectDropWrapper cursor position-relative'>
                {icon}
                <span className='openSelect' onClick={openSelect}>{selectItem.length > 14 ? selectItem.substr(0, 14) + '...' : selectItem}<KeyboardArrowDownIcon className='arrow' /></span>
                {isopenSelect === true &&
                    <div className='selectDrop'>
                        <div className='searchField'>
                            <input type='text' placeholder='Search here...' onChange={filterList} />
                        </div>
                        <ul className='selectResult'>
                            <li key={0} onClick={() => closeSelect(0, placeholder)} className={`${selectIndex === 0 ? "active" : ''}`}>{placeholder}</li>
                            {listData.map((item, index) => {
                                return (
                                    <li key={index + 1} onClick={() => closeSelect(index + 1, item)} className={`${selectIndex === index + 1 ? "active" : ''}`}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                }
            </div>
        </ClickAwayListener>
    )
}

export default Select