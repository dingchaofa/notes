package main

import (
	"fmt"
	"log"
)

func main() {
	// addTwoNumbers
	l1 := &ListNode{
		Val: 9,
		Next: &ListNode{
			Val: 9,
			Next: &ListNode{
				Val: 9,
			},
		},
	}
	l2 := &ListNode{
		Val: 9,
		Next: &ListNode{
			Val: 9,
			Next: &ListNode{
				Val: 9,
				Next: &ListNode{
					Val: 9,
				},
			},
		},
	}
	log.Printf("%s", addTwoNumbers(l1, l2))
}

type ListNode struct {
	Val  int
	Next *ListNode
}

func (l *ListNode) String() string {
	s := ""
	for l != nil {
		log.Println(l.Val)
		s = fmt.Sprintf("%s->%v", s, l.Val)
		l = l.Next
	}
	return s
}
/* 
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

链接：https://leetcode-cn.com/problems/add-two-numbers
*/
// 单链表只能向后移动，没法向前移动
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	var call int
	var tail, head *ListNode
	for l1 != nil || l2 != nil || call > 0 { // call只执行一次，call放在这里运算更加快速，如果不单独再if判断call
		var n1, n2 int
		if l1 != nil {
			n1 = l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			n2 = l2.Val
			l2 = l2.Next
		}
		sum := n1 + n2 + call
		if tail == nil {
			head = &ListNode{ // 先固定头节点
				Val: sum % 10,
			}
			tail = head
		} else {
			tail.Next = &ListNode{
				Val: sum % 10,
			}
			tail = tail.Next // 每次移动尾节点
		}
		call = sum / 10
	}

	return head
}
