class Set{
    constructor(values){
        this.items = {};
        if(values && values.length){
            for (let i = 0,length = values.length; i < length; i++) {
                this.add(values[i])
            }
        }
    }

    /**
     * @description: 添加一个对象，添加成功返回`true`,否则返回`false`
     * @param {any} element
     * @return {boolean}
     */
    add(element){
        if(!this.has(element)){
            this.items[element] = element;
            return true;
        }
        return false;
    }

    /**
     * @description: 检查是否存在该元素, 如果存在返回`true`,否则返回`false`
     * @param {any} element
     * @return {boolean}
     */
    has(element){
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    /**
     * @description: 返回集合长度
     * @return {number}
     */
    size(){
        return Object.keys(this.items).length
    }

    /**
     * @description: 删除元素，删除成功返回`true`,否则返回`false`
     * @param {any} element
     * @return {boolean}
     */
    delete(element){
        if(this.has(element)){
            delete this.items[element];
            return true
        }
        return false
    }

    /**
     * @description: 清空集合
     * @return {void}
     */
    clear(){
        this.items = {};
    }

    /**
     * @description: 返一个包含所有数组的元素
     * @return {any[]}
     */
    values(){
        return Object.values(this.items)
    }

    
    /**
     * @description: A集合与B集合取并集于当前集合
     * @param {Set} ASet
     * @param {Set} BSet
     * @return {this}
     */
    union(ASet,BSet){
        this.clear();
        this.unionWidth(ASet);
        this.unionWidth(BSet)
        return this
    }

    /**
     * @description: 当前集合与B集合求并集
     * @param {Set} BSet
     * @return {this}
     */
    unionWidth(BSet){
        const values = BSet.values();
        for (let i = 0,length = values.length; i < length; i++) {
            this.add(values[i])       
        }
        return this
    }

    /**
     * @description: A集合与B集合取交集于当前集合
     * @param {Set} ASet
     * @param {Set} BSet
     * @return {this}
     */
    intersection(ASet,BSet){
        this.clear();
        this.unionWidth(ASet)
        this.intersectionWidth(BSet)
        return this
    }

    /**
     * @description: 当前集合与B集合取交集
     * @param {Set} BSet
     * @return {this}
     */
    intersectionWidth(BSet){
        const values = this.values();
        for (let i = 0,length = this.size(); i < length; i++) {
            if(!BSet.has(values[i])){
                this.delete(values[i])
            }            
        }
        return this;
    }

    /**
     * @description: A集合与B集合求茶集于A集合中
     * @param {Set} ASet
     * @param {Set} BSet
     * @return {this}
     */
    difference(ASet,BSet){
        this.clear();
        this.unionWidth(ASet);
        this.differenceWidth(BSet);
        return this
    }

    /**
     * @description: 当前集合与B集合求差集
     * @param {Set} BSet
     * @return {this}
     */
    differenceWidth(BSet){
        const values = BSet.values();
        for (let i = 0,length = values.length; i < length; i++) {
            if (this.has(values[i])) {
                this.delete(values[i]);
            }
        }
        return this
    }

    /**
     * @description: 判断Set是否是当前的集合的子集
     * @param {Set} Set
     * @return {boolean}
     */
    isSubsetOf(Set){
        const values = Set.values();
        for (let i = 0,length = values.length; i < length; i++) {
            if(!this.has(values[i])){
                return false
            }
        }
        return true
    }
}

export {Set}