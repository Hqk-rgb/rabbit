//封装购物车模块
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore(
	'cart',
	() => {
		// 1. 定义state - cartList
		const cartList = ref([])
		// 2. 定义action - addCart
		const addCart = goods => {
			//添加购物车操作
			//已添加过- count+1
			//未添加过 直接push
			const item = cartList.value.find(item => goods.skuId === item.skuId)
			if (item) {
				item.count++
			} else {
				cartList.value.push(goods)
			}
		}

		//删除购物车物品操作
		const delCart = skuId => {
			//方法一:找到要删除项的下标值 - splice
			// const idx = cartList.value.findIndex(item => skuId === item.skuId)
			// cartList.value.splice(idx, 1)
			//方法二:使用数组的过滤方法 - filter
			cartList.value = cartList.value.filter(item => skuId !== item.skuId)
		}
		//计算数量和总价
		const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
		const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

		return {
			allCount,
			allPrice,
			cartList,
			addCart,
			delCart
		}
	},
	{
		persist: true
	}
)
