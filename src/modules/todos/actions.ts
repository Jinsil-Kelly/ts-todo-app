import {createStandardAction} from 'typesafe-actions';

// 액션 type
export const INSERT = 'reducer/INSERT'; // 새로운 todo 를 등록함
export const TOGGLE = 'reducer/TOGGLE'; // todo 를 체크/체크해제 함
export const REMOVE = 'reducer/REMOVE'; // todo 를 제거함

// 액션 생성 함수
export const insert = createStandardAction(INSERT)<string>();
export const toggle = createStandardAction(TOGGLE)<number>();
export const remove = createStandardAction(REMOVE)<number>();
