import { Post } from "src/app/models/post"
import { PostsService } from "src/app/services/Posts/posts.service";
import { PostsComponent } from "./posts.component";

describe('Posts component', () => {
    let POST: Post[];
    let component: PostsComponent;
    let mockPostService: any;

    beforeEach(() => {
        POST = [
            {
                id: 1, body: 'body 1', title: 'title 1', userId: 1
            },
            {
                id: 2, body: 'body 2', title: 'title 2', userId: 2
            },
            {
                id: 3, body: 'body 3', title: 'title 3', userId: 3
            }
        ]
        mockPostService = jasmine.createSpyObj(PostsService, ['getPosts', 'deletePosts']);
        component = new PostsComponent(mockPostService);
    });

    describe('delete', () => {
        it('should delete the selected Post from the post', () => {
            
        })
    })


})