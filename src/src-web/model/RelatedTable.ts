/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2019. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/

export interface TableProps {
    items: Array<any>
    kind: Array<any>,
    count: Array<number>,
    filter: any
}

export interface TableState {
    page: number,
    pageSize: number,
    sortDirection: any,
    selectedKey: string,
    modalOpen: boolean,
    collapse: boolean
}