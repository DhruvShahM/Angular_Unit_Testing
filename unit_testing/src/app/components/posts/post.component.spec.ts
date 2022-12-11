import { of } from "rxjs";
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
        mockPostService = jasmine.createSpyObj(['getPosts', 'deletePosts']);
        component = new PostsComponent(mockPostService);
    });

    describe('delete', () => {

        beforeEach(() => {
            mockPostService.deletePosts.and.returnValue(of(true));
            component.posts = POST;
        })

        it('should delete the selected Post from the post', () => {
            component.deletePosts(POST[1]);
            expect(component.posts.length).toBe(2);
        })

        it('should delete the actual selected Posts in Posts', () => {
            component.deletePosts(POST[2]);

            for (let post of component.posts) {
                expect(post).not.toEqual(POST[2])
            }
        })

        it('should delete the selected Post service only once', () => {
            component.deletePosts(POST[1]);
            expect(mockPostService.deletePosts).toHaveBeenCalledTimes(1);
        })
    })


})