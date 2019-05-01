 <template>
  <div class="edit-container">
     <!-- Preview pane -->
      <aside class="edit-preview">
        <h1 v-html="editPost.title"></h1>
        <span v-if="this.editPost.tag && this.editPost.author" ><span class="edit-preview-author">作者: <span>{{editPost.author}}</span></span>标签：<span class="edit-preview-tag tags" v-for="tag in tags">{{tag}}</span></span>
        <pre v-html="notePreview"></pre>
      </aside>
      <section class="edit-main">
        <div class="edit-toolbar">
          <input class="edit-title" v-model="editPost.title" placeholder="Title" />
          <input class="edit-author" v-model="editPost.author" placeholder="Author" />
          <input class="edit-tag" v-model="editPost.tag" placeholder="Tag(请用;分隔)" />
          <img @click="postBlog" class="edit-post" src="../svg/post.svg">
        </div>
        <textarea v-model="editPost.content"></textarea>
        <div class="edit-toolbar edit-status-bar">
          <span class="edit-date">
            <span class="edit-label">Created</span>
            <span class="edit-value">{{ editPost.created | date }}</span>
          </span>
          <span class="edit-lines">
            <span class="edit-label">Lines</span>
            <span class="edit-value">{{ linesCount }}</span>
          </span>
          <span class="edit-words">
            <span class="edit-label">Words</span>
            <span class="edit-value">{{ wordsCount }}</span>
          </span>
          <span class="edit-characters">
            <span class="edit-label">Characters</span>
            <span class="edit-value">{{ charactersCount }}</span>
          </span>
        </div>
      </section>
     
</div>
</template>
<script >
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data() {
      return {
        editPost: {},
      }
    },
    computed: {
    ...mapGetters(['Post']),

    notePreview () {
      // Markdown rendered to HTML
      return this.editPost ? marked(this.editPost.content) : ''
    },
    tags () {
      return this.editPost.tag ? this.editPost.tag.split(';') : ''
    },
    linesCount () {
      if (this.editPost) {
        // Count the number of new line characters
        return this.editPost.content.split(/\r\n|\r|\n/).length
      }
    },

    wordsCount () {
      if (this.editPost) {
        var s = this.editPost.content
        // Turn new line cahracters into white-spaces
        s = s.replace(/\n/g, ' ')
        // Exclude start and end white-spaces
        s = s.replace(/(^\s*)|(\s*$)/gi, '')
        // Turn 2 or more duplicate white-spaces into 1
        s = s.replace(/[ ]{2,}/gi, ' ')
        // Return the number of spaces
        return s.split(' ').length
      }
    },

    charactersCount () {
      if (this.editPost) {
        return this.editPost.content.split('').length
      }
    },
  },

  // Change watchers
  watch: {
    selectedId (val, oldVal) {
      localStorage.setItem('selected-id', val)
    },
  },

  methods:{
    addNote () {
      const note = {
        title: '',
        author: '',
        content: '',
        created: null,
      }
      // Add
      this.editPost=note    
    },
    postBlog () {
      this.$fetch('/writeBlog',{
        method: "POST",
        body: JSON.stringify(this.editPost)
      }).then(data => {
        console.log(data)
        if (data.status == 1) {
          alert('上传成功！')
          this.addNote()
        }
      })
    }
  },
  created: function () {
      this.addNote()
  },
}
</script>

<style>
.edit-title, .edit-tag, .edit-author {
    border: solid 2px silver;
    border-radius: 3px;
    padding: 6px 10px;
    background: whitesmoke;
    color: #666;
    width: 20%;
}
.edit-author {
  width:10%
}
.edit-title {
  width:30%;
}
.edit-title:focus, .edit-tag:focus, .edit-author:focus {
  border-color: silver;
  background: white;
  color: black;
}
.edit-post {
  width: 80px;
  height: 60px;
  vertical-align: middle;
  opacity: 0.7;
  transition: opacity .2s ease-in;
  cursor: pointer;
}
.edit-post:hover {
  opacity: 1;
}
textarea {
  resize: none;
  border: none;
  width:100%;
  height: 500px;
  box-sizing: border-box;
  font-family: monospace;
  border: solid 2px silver;
}

textarea, .edit-preview {
  flex: auto 1 1;
  overflow: auto;
}

.edit-preview {
  padding: 12px;
  box-sizing: border-box;
  border-left: solid 4px #f8f8f8;
  border: solid 2px silver;
}

.edit-container {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width:100%
}

.edit-main, .edit-preview {
  width: 48%;
}
.edit-main {
  margin-left: 10px;
}
.edit-toolbar {
  padding: 4px;
  box-sizing: border-box;
}

.edit-status-bar {
  color: #777;
}
.edit-preview h1 {
  margin: 0 auto;
  text-align: center;
}
.edit-preview-tag, .edit-preview-author span {
  border: 1px solid gray;
  border-radius: 15px;
  min-width: 30px;
  padding: 0 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
}
.edit-preview-tag:hover, .edit-preview-author span:hover {
  background-color: silver;
}
.edit-preview > span {
  display: block;
  text-align: center;
}
.edit-preview-author {
  border: none;
}
.edit-preview pre {
  white-space:pre-wrap; 
}
</style>