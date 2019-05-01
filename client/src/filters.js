import moment from 'moment' 
import marked from 'marked'
export function date (value) { 
  return moment(value).format('L') 
} 

export function markdown (value) {
	return marked(value)
}