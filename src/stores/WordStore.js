import { create } from 'zustand';

const useWordStore = create((set) => ({
    wordList: [],
    word: '',
    setWordList: (list) => {
       set((state) => {
        console.log("state printing", state);
        return {
            ...state,
            wordList: list
        }
       });
    },
    setWord: (newWord) => {
        set((state) => {
            return {
                ...state,
                word: newWord
            }
        });
    }
}));

export default useWordStore;